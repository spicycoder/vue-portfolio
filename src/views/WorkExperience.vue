<template>
    <v-timeline>
        <v-timeline-item
        v-for="(i, index) in info"
        :key="index"
        :color="i.color"
        small
        >
        <template v-slot:opposite>
            <span
            :class="`headline font-weight-bold ${i.color}--text`"
            v-text="i.year"
            ></span>
        </template>
        <v-card>
            <v-card-title>
                <span :class="`headline ${i.color}--text`">
                    {{i.company}}
                </span>
            </v-card-title>
            <v-sheet class="d-flex" :color="`${i.color} lighten-3`">
                <v-list two-line>
                    <v-list-tile @click="openLink(i)">
                        <v-list-tile-content>
                            <v-list-tile-title>{{ i.title }}</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-sheet>
        </v-card>
        </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
    name: "WorkExperience",
    data: () => ({
        info: [
            {
                color: 'deep-orange',
                year: 'June-2009',
                company: 'Srinsoft Technologies',
                link: 'https://www.srinsofttech.com',
                title: 'Team Lead'
            },
            {
                color: 'teal',
                year: 'September-2011',
                company: 'iLink-Systems',
                link: 'https://www.ilink-systems.com',
                title: 'Software Engineer'
            },
            {
                color: 'lime',
                year: 'May-2012',
                company: 'ABCO Advisory Services',
                link: 'https://www.advisory.com',
                title: 'Software Engineer'
            },
            {
                color: 'blue-grey',
                year: 'June-2013',
                company: 'Kony Labs',
                link: 'https://www.kony.com',
                title: 'Senior Product Developer'
            },
            {
                color: 'amber',
                year: 'October-2014',
                company: 'ABCO Advisory Services',
                link: 'https://www.advisory.com',
                title: 'Senior Software Engineer'
            },
            {
                color: 'indigo',
                year: 'June-2016',
                company: 'Eurofins',
                link: 'https://www.eurofins.com',
                title: 'Module Lead'
            },
            {
                color: 'pink',
                year: 'August-2019',
                company: 'JustAnswer',
                link: 'https://www.justanswer.com',
                title: 'Senior Software Engineer'
            },
            {
                color: 'green',
                year: 'August-2020',
                company: 'Talent Recruit',
                link: 'http://talentrecruit.com',
                title: 'Vice President - Technology'
            }
        ]
    }),
    methods: {
        openLink: function (item) {
            window.open(item.link, "_blank");
        }
    }
}
</script>