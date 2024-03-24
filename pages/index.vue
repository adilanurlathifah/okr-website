<template>
  <div>
     <select v-model="selectedGender" @change="filterMember">
       <option value="all">All</option>
       <option value="male">Male</option>
       <option value="female">Female</option>
     </select>
     <table>
       <tr v-for="m in filteredMembers" :key="m.index">
         <td>{{m.index}}</td>
         <td>{{m.name}}</td>
         <td>{{m.gender}}</td>
       </tr>
     </table>
  </div>
</template>
 
<script>
 export default {
  layout: 'default-nuxt',
  data() {
     return {
       member: 
        [
          {"index":0,"name":"Bonita Valenzuela","gender":"female"},
          {"index":1,"name":"Chaney Reed","gender":"male"},
          {"index":2,"name":"Sandoval Smith","gender":"male"},
          {"index":3,"name":"Judy Schroeder","gender":"female"},
          {"index":4,"name":"Thelma Cervantes","gender":"female"},
          {"index":5,"name":"Zamora Huff","gender":"male"},
          {"index":6,"name":"Alma Mullen","gender":"female"},
          {"index":7,"name":"Aisha Pugh","gender":"female"},
          {"index":8,"name":"Deana Clarke","gender":"female"},
          {"index":9,"name":"Blankenship Contreras","gender":"male"},
          {"index":10,"name":"Coleen Short","gender":"female"},
          {"index":11,"name":"Owen Reilly","gender":"male"},
          {"index":12,"name":"Tucker Conway","gender":"male"},
          {"index":13,"name":"Nadine Wiggins","gender":"female"},
          {"index":14,"name":"Tommie Austin","gender":"female"},
          {"index":15,"name":"Luz Singleton","gender":"female"},
          {"index":16,"name":"Myrna Carpenter","gender":"female"},
          {"index":17,"name":"Schneider Blankenship","gender":"male"},
          {"index":18,"name":"Heather Chapman","gender":"female"},
          {"index":19,"name":"Katelyn Reese","gender":"female"},
          {"index":20,"name":"Elvira Guzman","gender":"female"},
          {"index":21,"name":"Gibbs Kinney","gender":"male"}
        ],
        selectedGender: 'all',
        filteredMembers: []
     }
  },
  methods: {
    filterMember() {
      if (this.selectedGender === 'all') {
        this.filteredMembers = this.member;
      } else {
        this.filteredMembers = this.member.filter(e => e.gender === this.selectedGender);
      }
    }
  },
  watch: {
      selectedGender(newVal) {
        this.filterMember();
      }
  },
  created() {
      this.filteredMembers = this.member;
  }
};
</script>
 