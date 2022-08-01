using Microsoft.EntityFrameworkCore;
using WebApplication1.Data;
using WebApplication1.Entitties;

namespace WebApplication1.HostedServers
{
    public class DolarCurrency : BackgroundService
    {
        private readonly IHttpClientFactory _httpClientFactory;
        private readonly ContextDB _context;
        public DolarCurrency(IHttpClientFactory httpClientFactory, IServiceProvider serviceProvider)
        {
            _httpClientFactory = httpClientFactory;
            _context = serviceProvider.CreateScope().ServiceProvider.GetRequiredService<ContextDB>();
        }

        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {

            while (!stoppingToken.IsCancellationRequested)
            {
                var request = new HttpRequestMessage(HttpMethod.Get,
                    "https://economia.awesomeapi.com.br/last/USD-BRL");

                var client = _httpClientFactory.CreateClient();

                HttpResponseMessage response = await client.SendAsync(request);
                if (response.IsSuccessStatusCode)
                {
                    var responseData = await response.Content.ReadFromJsonAsync<DolarResponseData>();
                    DolarData dolarBd = new DolarData(responseData.USDBRL.bid, DateTime.UtcNow, Guid.NewGuid());
                    _context.dolarData.Add(dolarBd);
                    _context.SaveChanges();
                }
                await Task.Delay(1000);
            }
        }
    }
}
