using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WebApplication1.Migrations
{
    public partial class Recreatingtables : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "clients",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "uuid", maxLength: 128, nullable: false),
                    email = table.Column<string>(type: "varchar", maxLength: 70, nullable: false),
                    rg = table.Column<int>(type: "int", nullable: false),
                    name = table.Column<string>(type: "varchar", maxLength: 50, nullable: false),
                    password_hash = table.Column<string>(type: "varchar", maxLength: 200, nullable: false),
                    birth_date = table.Column<DateTime>(type: "Date", nullable: false),
                    created_at = table.Column<DateTime>(type: "Date", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_clients", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "registerCodes",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "uuid", maxLength: 128, nullable: false),
                    code = table.Column<string>(type: "varchar", maxLength: 10, nullable: false),
                    email = table.Column<string>(type: "varchar", maxLength: 100, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_registerCodes", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "users",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "uuid", maxLength: 128, nullable: false),
                    email = table.Column<string>(type: "varchar", maxLength: 100, nullable: false),
                    password = table.Column<string>(type: "varchar", maxLength: 200, nullable: false),
                    type = table.Column<string>(type: "varchar", maxLength: 20, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_users", x => x.id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "clients");

            migrationBuilder.DropTable(
                name: "registerCodes");

            migrationBuilder.DropTable(
                name: "users");
        }
    }
}
