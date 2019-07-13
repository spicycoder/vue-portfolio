<template>
      <v-container
        fluid
        grid-list-lg
      >
        <v-layout row wrap>
          <v-flex xs12>
            <v-card color="deep-orange lighten-2">
              <v-card-title primary-title>
                <div class="headline">Professional Qualification</div>
              </v-card-title>
              <v-subheader>Year of passing: 2009</v-subheader>
              <v-subheader>Aggregate: 70%</v-subheader>
              <v-card-text>
                Completed Bachelor of Engineering (ECE) from <strong>Veltech Engineering College</strong>, Avadi. (Affiliated to Anna University)
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12>
            <v-card color="cyan lighten-2">
              <v-card-title primary-title>
                <div class="headline">Academic Qualification</div>
              </v-card-title>
              <v-subheader>Schooling: Our Ladys matriculation Hr.Sec School</v-subheader>
              <v-data-table
                :headers="headers"
                :items="school"
                hide-actions
              >
                <template v-slot:items="props">
                  <td>{{ props.item.exam }}</td>
                  <td>{{ props.item.board }}</td>
                  <td>{{ props.item.year }}</td>
                  <td>{{ props.item.percentage }}</td>
                </template>
              </v-data-table>
            </v-card>
          </v-flex>
          <v-flex xs12>
            <v-card color="teal lighten-2">
              <v-card-title primary-title>
                <div class="headline">Personal Information</div>
              </v-card-title>
              <v-subheader>email: spk2naveen@hotmail.com</v-subheader>
              <v-subheader>phone: +91-87549 60888</v-subheader>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
</template>
<script>
export default {
  data: () => ({
    headers: [
      {
        text: "Exam",
        sortable: false,
        value: "exam"
      },
      {
        text: "Board",
        sortable: false,
        value: "board"
      },
      {
        text: "Year of passing",
        sortable: false,
        value: "year"
      },
      {
        text: "Score",
        sortable: false,
        value: "percentage"
      },
    ],
    school: [
      {
        exam: "10th",
        board: "Matriculation",
        year: "2002",
        percentage: "83%"
      },
      {
        exam: "12th",
        board: "State Board",
        year: "2004",
        percentage: "81%"
      },
    ]
  })
}
</script>
