using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WebApplication1.Migrations
{
    public partial class Changingcolumn2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_clients_users_UserId",
                table: "clients");

            migrationBuilder.DropIndex(
                name: "IX_clients_UserId",
                table: "clients");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "clients");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "UserId",
                table: "clients",
                type: "uuid",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_clients_UserId",
                table: "clients",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_clients_users_UserId",
                table: "clients",
                column: "UserId",
                principalTable: "users",
                principalColumn: "id");
        }
    }
}
