using Microsoft.AspNetCore.Mvc;

namespace presentation;
[ApiController]
[Route("/api/[controller]")]
public class RegisterController : ControllerBase
{
    [HttpGet("/sdws")]
    public IActionResult Baseste()
    {
        return Ok("Hello world");
    }
}
