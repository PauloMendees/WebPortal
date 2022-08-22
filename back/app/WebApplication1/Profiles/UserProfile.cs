using AutoMapper;
using WebApplication1.Data.DTO.User;
using WebApplication1.Entitties;

namespace WebApplication1.Profiles
{
    public class UserProfile : Profile
    {
        public UserProfile()
        {
            CreateMap<User, ReadUserDTO>();
        }
    }
}
