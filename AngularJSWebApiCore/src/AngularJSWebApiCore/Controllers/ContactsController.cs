using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using AngularJSWebApiCore.Models;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;

namespace AngularJSWebApiCore.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
    public class ContactsController : Controller
    {
        private readonly ContactContext _context;
        public ContactsController(ContactContext context)
        {
            _context = context;
        }

        // GET api/contacts
        [HttpGet]
        public IList<Contact> Get()
        {

            var user = User.FindFirst(ClaimTypes.NameIdentifier).Value;

            bool isUserAuthenticated = User.Identity.IsAuthenticated;

            IList<Contact> contacts;

            contacts = _context.Contacts
                    .OrderBy(b => b.FirstName)
                    .ToList();


            return contacts;
        }

        // GET api/contacts/5
        [HttpGet("{id}")]
        public Contact Get(int id)
        {
            Contact contact;

            contact = _context.Contacts.FirstOrDefault(a => a.Id == id);


            return contact;
        }

        // POST api/contacts
        [HttpPost]
        public void Post([FromBody]Contact value)
        {
            var contact = new Contact
            {
                Id = value.Id,
                FirstName = value.FirstName,
                MiddleName = value.MiddleName,
                LastName = value.LastName,
                Email = value.Email,
                PhoneNumber = value.PhoneNumber
            };

            _context.Contacts.Add(contact);
            _context.SaveChanges();
        }

        // PUT api/contacts/5
        [HttpPut]
        public void Put([FromBody]Contact value)
        {

            Contact contact = _context.Contacts.FirstOrDefault(m => m.Id == value.Id);
            if (contact != null)
            {
                contact.FirstName = value.FirstName;
                contact.MiddleName = value.MiddleName;
                contact.LastName = value.LastName;
                contact.Email = value.Email;
                contact.PhoneNumber = value.PhoneNumber;

                _context.SaveChanges();
            }

        }

        // DELETE api/contacts/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {

            Contact contact = _context.Contacts.FirstOrDefault(a => a.Id == id);

            if (contact != null)
            {
                _context.Contacts.Remove(contact);
                _context.SaveChanges();
            }

        }
    }
}
