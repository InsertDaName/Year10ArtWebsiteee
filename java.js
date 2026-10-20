function SendMail()
{
    var body = document.getElementById("Message").value;
    var SubjectLine = document.getElementById("Subject").value;
    window.location.href = "mailto:fakemail@example.com?subject="+SubjectLine+"&body="+body;
}
