using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WebApplication1.Migrations
{
    public partial class Criandorelacionaentoclienteusuario : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "CreatedBy_id",
                table: "clients",
                type: "uuid",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.CreateIndex(
                name: "IX_clients_CreatedBy_id",
                table: "clients",
                column: "CreatedBy_id");

            migrationBuilder.AddForeignKey(
                name: "FK_clients_users_CreatedBy_id",
                table: "clients",
                column: "CreatedBy_id",
                principalTable: "users",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_clients_users_CreatedBy_id",
                table: "clients");

            migrationBuilder.DropIndex(
                name: "IX_clients_CreatedBy_id",
                table: "clients");

            migrationBuilder.DropColumn(
                name: "CreatedBy_id",
                table: "clients");
        }
    }
}
