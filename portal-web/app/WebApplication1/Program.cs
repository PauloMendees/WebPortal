using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using WebApplication1.Data;
using WebApplication1.Service.Criptografia;
using WebApplication1.Service.Email;
using WebApplication1.Service.UserService;
using WebApplication1.Utils;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

builder.Services.AddDbContext<ContextDB>(
    x => x.UseNpgsql(
        builder.Configuration.GetConnectionString("WebPortalDb"),
        providerOptions => providerOptions.EnableRetryOnFailure(5, TimeSpan.FromSeconds(10), null)
        ));

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
builder.Services.AddScoped<GetAllUsers, GetAllUsers>();
builder.Services.AddScoped<GetByIdUser, GetByIdUser>();
builder.Services.AddScoped<StartRegister, StartRegister>();
builder.Services.AddScoped<SendEmailService, SendEmailService>();
builder.Services.AddScoped<StartRegister, StartRegister>();
builder.Services.AddScoped<RegisterCodeVerify, RegisterCodeVerify>();
builder.Services.AddScoped<GenerateHash, GenerateHash>();
builder.Services.AddScoped<Register, Register>();

byte[] key = Encoding.ASCII.GetBytes(Environment.GetEnvironmentVariable("TokenKey"));
builder.Services.AddAuthentication(x =>
{
    x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(x =>
{
    x.RequireHttpsMetadata = false;
    x.SaveToken = true;
    x.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = new SymmetricSecurityKey(key),
        ValidateIssuer = false,
        ValidateAudience = false,
    };
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(b =>
{
    b.AllowAnyHeader();
    b.AllowAnyMethod();
    b.AllowAnyOrigin();
});

app.UseHttpsRedirection();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
