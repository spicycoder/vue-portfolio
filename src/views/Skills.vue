<template>
  <v-layout>
    <v-flex xs12 sm6 md10 offset-sm3 offset-md1>
        <v-container grid-list-lg fluid>
          <v-layout row wrap>
            <v-flex
              v-for="(item, index) in items"
              :key="item.name"
              lg3
              md4
              sm6
              xs12
            >
              <v-card tile>
                  <v-container
                    fluid
                    grid-list-lg
                    >
                    <v-layout row wrap>
                        <v-flex xs12>
                            <v-card :color="`${colors[index % colors.length]} lighten-2`">
                                <v-card-title primary-title class="headline">
                                    {{item.name}}
                                </v-card-title>
                                <v-sheet class="d-flex">
                                    <v-list two-line>
                                        <v-list-tile v-for="skill in item.skills" :key="skill">
                                            <v-list-tile-content>
                                                <v-list-tile-title>{{ skill }}</v-list-tile-title>
                                            </v-list-tile-content>
                                        </v-list-tile>
                                    </v-list>
                                </v-sheet>
                            </v-card>
                        </v-flex>
                    </v-layout>
                  </v-container>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
    name: "Skills",
    data: () => ({
        sizes: [
            { text: 'Extra small (2px)', value: 'xs' },
            { text: 'Small (4px)', value: 'sm' },
            { text: 'Medium (8px)', value: 'md' },
            { text: 'Large (16px)', value: 'lg' },
            { text: 'Extra large (24px)', value: 'xl' }
        ],
        colors: [
            "cyan",
            "teal",
            "pink",
            "lime",
            "deep-orange",
            "red",
            "green",
            "blue",
            "purple",
            "blue-grey",
            "indigo",
            "amber"
        ],
        items: [
            {
                name: "Web Application",
                skills: [
                    "ASP.Net Core",
                    "ASP.Net MVC & Web API",
                    "ASP.Net Web Forms"
                ]
            },
            {
                name: "Desktop Application",
                skills: [
                    "Windows Presentation Foundation",
                    "Windows Forms",
                    "Universal Windows Platform (UWP)"
                ]
            },
            {
                name: "Build Tools",
                skills: [
                    "Cake Scripts",
                    "Azure Devops",
                    "Jenkins"
                ]
            },
            {
                name: "Quality",
                skills: [
                    "UI - Automation",
                    "Performance testing",
                    "BenchmarkDotNet & JMeter"
                ]
            },
            {
                name: "Frontend Technologies",
                skills: [
                    "Angular 8",
                    "Vue 3",
                    "HTML 5",
                    "CSS 3",
                    "TypeScript",
                    "JavaScript"
                ]
            },
            {
                name: "Unit Testing Framework",
                skills: [
                    "xUnit",
                    "nUnit",
                    "Moq",
                    "Shouldly",
                    "nFluent",
                    "Fluent Assertion"
                ]
            },
            {
                name: "Productivity Tools",
                skills: [
                    "Resharper",
                    "LinqPad",
                    "RoslynPad",
                    "NSwag Studio",
                    "Postman",
                    "MagicDraw"
                ]
            },
            {
                name: "Database / ORM",
                skills: [
                    "SQL Server",
                    "MongoDB",
                    "Entity Framework",
                    "nHibernate",
                    "Dapper",
                    "C# MongoDB Driver"
                ]
            },
            {
                name: "Mobile Development",
                skills: [
                    "Ionic 4",
                    "Progressive Web App (PWA)"
                ]
            },
            {
                name: "Source Control",
                skills: [
                    "Git",
                    "TFS"
                ]
            },
            {
                name: "Process",
                skills: [
                    "Agile - Scrum",
                    "BDD using SpecFlow"
                ]
            },
        ]
    })
}
</script>

<style scoped>

</style>
