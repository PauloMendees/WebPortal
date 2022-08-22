using System.Text;

namespace WebApplication1.Utils
{
    public class CodeGenerator
    {
        public string generate()
        {
            string chars = "abcdefghijklmnopqrstuvwxyz0123456789";
            Random random = new Random();
            StringBuilder buildedString = new StringBuilder();
            for (int i = 0; i < 4; i++)
            {
                int pos = random.Next(0, chars.Length);
                buildedString.Append(chars[pos].ToString());
            }
            return buildedString.ToString();
        }
    }
}
