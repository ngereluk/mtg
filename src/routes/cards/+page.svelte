<script lang="ts">
    import CardList from '../components/CardList.svelte';
  </script>
  
  <main>
    <!-- component containing list of all cards - contains api calls, search, infinite scroll -->
    <CardList />
  </main>


  <style>
    :global(body){
      background-color: #DBF2D5;
      background-color: #4E684B;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 100 100'%3E%3Crect x='0' y='0' width='46' height='46' fill-opacity='0.6' fill='%233D563D'/%3E%3C/svg%3E"); 
      margin: 0px !important; 
    }
  </style>