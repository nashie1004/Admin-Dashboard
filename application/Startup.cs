using Microsoft.Extensions.DependencyInjection;

namespace application;
public class StartUp
{
    public static void ConfigureApplication(
        IServiceCollection services
    )
    {
       services.AddMediatR(cfg => cfg.RegisterServicesFromAssembly(typeof(StartUp).Assembly));
    }
}