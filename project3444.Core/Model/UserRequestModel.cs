using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace project3444.Core.Model
{
    public class UserRequestModel
    {
        public int Id { get; set; }

        [Required, Column(TypeName = "varchar")]
        public string Name { get; set; }

        [Required, Column(TypeName = "varchar")]
        public string Email { get; set; }

        [Required, Column(TypeName = "varchar")]
        public string UserName { get; set; }

        [Required, Column(TypeName = "varchar")]
        [MinLength(8)]
        public string Password { get; set; }
    }
}
