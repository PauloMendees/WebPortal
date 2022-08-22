namespace WebApplication1.Utils
{
    public class LoginResult
    {
        public bool Error { get; set; }
        public string UserType { get; set; }
        public string Token { get; set; }
        public string Message { get; set; }

        public LoginResult(string token, string userType, bool error, string message)
        {
            Token = token;
            UserType = userType;
            Error = error;
            Message = message;
        }
    }
}
