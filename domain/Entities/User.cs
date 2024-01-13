namespace domain;
public class User : Audit
{
    public long UserId { get; set; }
    public string UserName { get; set; }    
    public string HashedPassword { get; set; }
    public string Avatar { get; set; }  
    public DateTime RegisterDate { get; set; }
    public decimal Karma { get; set; }
    public string Bio { get; set; }
}
