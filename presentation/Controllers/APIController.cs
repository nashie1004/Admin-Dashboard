using Microsoft.AspNetCore.Mvc;

namespace presentation;

[ApiController]
[Route("api/[controller]")]
public class APIController : ControllerBase
{
    [HttpGet("/test")]
    public ActionResult GetTest()
    {
        return Ok("Hello world");
    }
}
