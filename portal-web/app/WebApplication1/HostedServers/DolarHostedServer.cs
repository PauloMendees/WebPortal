namespace WebApplication1.HostedServers
{
    public class DolarHostedServer : IHostedService
    {
        private readonly IServiceScopeFactory _scopeFactory;

        public DolarHostedServer(IServiceScopeFactory scopeFactory)
        {
            _scopeFactory = scopeFactory;
        }

        public Task StartAsync(CancellationToken cancellationToken)
        {
            return Task.CompletedTask;
        }

        public Task StopAsync(CancellationToken cancellationToken)
        {
            return Task.CompletedTask;
        }
    }
}
