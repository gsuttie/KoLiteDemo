using System.Threading;
using System.Web.Mvc;

namespace KOLiteDemo.Controllers
{   
    public class PeopleController : Controller
    {
        public ViewResult Index()
        {
            return View();
        }

        public ViewResult Create()
        {
            return View();
        }

        public ViewResult CreateWithKOCommand()
        {
            return View();
        }

        public ViewResult CreateWithKOCommandActivity()
        {
            return View();
        }
        
        public JsonResult Save()
        {
            // Save Person Details
            Thread.Sleep(5000);
            var jsonData = "{ 'test ': 'data' }";

            return Json(jsonData, JsonRequestBehavior.AllowGet);
        }

    }
}