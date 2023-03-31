﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using ScrumToolsAPI.Data;

#nullable disable

namespace ScrumToolsAPI.Migrations
{
    [DbContext(typeof(ApplicationDBContext))]
    partial class ApplicationDBContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.4")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("ScrumToolsAPI.Models.Project", b =>
                {
                    b.Property<int>("ProjectId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ProjectId"));

                    b.Property<DateTime>("DataCreation")
                        .HasColumnType("datetime2");

                    b.Property<int>("Fk_User")
                        .HasColumnType("int");

                    b.Property<string>("ProjectName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ProjectId");

                    b.HasIndex("Fk_User");

                    b.ToTable("Projects");
                });

            modelBuilder.Entity("ScrumToolsAPI.Models.Story", b =>
                {
                    b.Property<int>("StoryId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("StoryId"));

                    b.Property<int>("Fk_Project")
                        .HasColumnType("int");

                    b.Property<string>("StoryDescription")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("StoryDifficulty")
                        .HasColumnType("int");

                    b.Property<int>("StoryEpic")
                        .HasColumnType("int");

                    b.Property<string>("StoryName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("StoryId");

                    b.HasIndex("Fk_Project");

                    b.ToTable("Stories");
                });

            modelBuilder.Entity("ScrumToolsAPI.Models.User", b =>
                {
                    b.Property<int>("UserId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("UserId"));

                    b.Property<string>("UserEmail")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserLastName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserPassword")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("UserRol")
                        .HasColumnType("int");

                    b.HasKey("UserId");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("ScrumToolsAPI.Models.Project", b =>
                {
                    b.HasOne("ScrumToolsAPI.Models.User", "User")
                        .WithMany("Projects")
                        .HasForeignKey("Fk_User")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("User");
                });

            modelBuilder.Entity("ScrumToolsAPI.Models.Story", b =>
                {
                    b.HasOne("ScrumToolsAPI.Models.Project", "Project")
                        .WithMany("Stories")
                        .HasForeignKey("Fk_Project")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Project");
                });

            modelBuilder.Entity("ScrumToolsAPI.Models.Project", b =>
                {
                    b.Navigation("Stories");
                });

            modelBuilder.Entity("ScrumToolsAPI.Models.User", b =>
                {
                    b.Navigation("Projects");
                });
#pragma warning restore 612, 618
        }
    }
}
