using Duende.IdentityServer;
using Duende.IdentityServer.Models;
using Microsoft.AspNetCore.Identity;
using System.Security.Principal;

namespace dis_identityserver
{
    public static class SD
    {
        public const string Admin = "admin";
        public const string User = "user";

        public static IEnumerable<ApiResource> ApiResources => new[]
        {
            new ApiResource("scrumtoolsapi")
            {
                Scopes = new List<string> { "scrumtoolsapi.g"},
                ApiSecrets = new List<Secret> { new Secret("secret".Sha256())}
            }
        };
        public static IEnumerable<IdentityResource> IdentityResources =>
            new List<IdentityResource>
            {
                new IdentityResources.OpenId(),
                new IdentityResources.Email(),
                new IdentityResources.Profile()
            };
        public static IEnumerable<ApiScope> ApiScopes =>
            new List<ApiScope>
            {
                new ApiScope(name: "scrumtoolsapi.g",   displayName: "(general) Read your data."),
                new ApiScope(name: "roles", displayName: "User roles"),
            };

        public static IEnumerable<Client> Clients =>
            new List<Client>
            {
                new Client
                {
                    ClientId = "interactive",
                    ClientSecrets = { new Secret("secret".Sha256()) },

                    AllowedGrantTypes = GrantTypes.Code,
                    AllowedScopes = { 
                        "roles",
                        "scrumtoolsapi.g", 
                        IdentityServerConstants.StandardScopes.OpenId,
                        IdentityServerConstants.StandardScopes.Profile,
                        IdentityServerConstants.StandardScopes.Email},
                    RedirectUris={ "http://localhost:3000/callback" },
                    PostLogoutRedirectUris={ "http://localhost:3000/" }

                }
            };  
    }
}
