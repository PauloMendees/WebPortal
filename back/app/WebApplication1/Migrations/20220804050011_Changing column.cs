using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WebApplication1.Migrations
{
    public partial class Changingcolumn : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "dolarData",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Value = table.Column<double>(type: "double precision", nullable: false),
                    Moment = table.Column<DateTime>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_dolarData", x => x.Id);
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

            migrationBuilder.CreateTable(
                name: "clients",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "uuid", maxLength: 128, nullable: false),
                    email = table.Column<string>(type: "varchar", maxLength: 70, nullable: false),
                    rg = table.Column<string>(type: "char(20)", maxLength: 20, nullable: false),
                    name = table.Column<string>(type: "varchar", maxLength: 50, nullable: false),
                    password_hash = table.Column<string>(type: "varchar", maxLength: 200, nullable: false),
                    Selfie = table.Column<string>(type: "text", nullable: false),
                    Document = table.Column<string>(type: "text", nullable: false),
                    created_by = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false),
                    birth_date = table.Column<DateTime>(type: "Date", nullable: false),
                    created_at = table.Column<DateTime>(type: "Date", nullable: false),
                    UserId = table.Column<Guid>(type: "uuid", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_clients", x => x.id);
                    table.ForeignKey(
                        name: "FK_clients_users_UserId",
                        column: x => x.UserId,
                        principalTable: "users",
                        principalColumn: "id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_clients_UserId",
                table: "clients",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "clients");

            migrationBuilder.DropTable(
                name: "dolarData");

            migrationBuilder.DropTable(
                name: "registerCodes");

            migrationBuilder.DropTable(
                name: "users");
        }
    }
}
