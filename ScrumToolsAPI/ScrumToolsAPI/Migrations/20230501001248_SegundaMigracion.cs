using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ScrumToolsAPI.Migrations
{
    /// <inheritdoc />
    public partial class SegundaMigracion : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "StoryEpic",
                table: "Stories");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "StoryEpic",
                table: "Stories",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
