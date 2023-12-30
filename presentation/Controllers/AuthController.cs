using Microsoft.AspNetCore.Mvc;

namespace presentation;

[ApiController]
public class AuthController : APIController
{
    [HttpGet("/authTest")]
    public ActionResult GetTest123()
    {
        return Ok("Hello world");
    }
}
