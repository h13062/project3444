﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace project3444.Core.Entity
{
    public class User
    {
        public int Id { get; set; }

        [Required, Column(TypeName = "varchar")]
        [MaxLength(50)]
        public string Name { get; set; }

        [Required, Column(TypeName = "varchar")]
        [MaxLength(50)]
        public string Email { get; set; }

        [Required, Column(TypeName = "varchar")]
        [MaxLength(50)]
        public string UserName { get; set; }

        [Required, Column(TypeName = "varchar")]
        [MaxLength(50)]
        [MinLength(8)]
        public string Password { get; set; }

        public int CommentId { get; set; }

        public Comment Comment { get; set; }
    }
}
