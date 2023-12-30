using Microsoft.AspNetCore.Mvc;

namespace presentation;

[ApiController]
[Route("/api/[controller]")]
public class ResourcesController : ControllerBase
{
    

    [HttpGet("/resources")]
    public IActionResult Resources()
    {
        return Ok("Hello world");
    }
}
