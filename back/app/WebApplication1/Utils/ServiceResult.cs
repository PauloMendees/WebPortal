namespace WebApplication1.Utils
{
    public class ServiceResult
    {
        public bool Error { get; set; }
        public string Message { get; set; }

        public ServiceResult(bool error, string message)
        {
            Message = message;
            Error = error;
        }
    }
}
