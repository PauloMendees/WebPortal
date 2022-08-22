#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["WebApplication1.csproj", "./"]
RUN dotnet restore "WebApplication1.csproj"
COPY . .
RUN dotnet publish "WebApplication1.csproj" -c Release -o /app/publish

ENV EmailPassword yapojritizmpxysg
ENV EmailServerPort 465
ENV FromEmail paulo.h.mendes25@gmail.com
ENV SmtpServer smtp.gmail.com
ENV TokenKey 29c8657b3a4840ea8acca9d2b7ec1cf6

FROM base AS final
WORKDIR /app
COPY --from=build /app/publish .

#CMD ASPNETCORE_URLS="http://*:$PORT" dotnet SiteAPI.dll
ENTRYPOINT ["dotnet", "WebApplication1.dll"]