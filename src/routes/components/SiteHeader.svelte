<script lang="ts">
import siteIcon from '../../lib/assets/siteIcon.svg'
      </script>
    
    
<div class='siteHeader'>
    <a class='siteHeaderContents' data-sveltekit-reload href="/cards">   
        <img
        src={siteIcon}
        alt="Site icon - a hand holding a single card"
        height="60"
        width="87" />
        <div class="siteTitle">MTG Encyclopedia</div>
    </a>
</div>
    
<style>
    .siteHeader {
        background-color:#A7F2A7;
        width: 100%;
        height:10%;
        display: flex;
        padding: 1%;
        box-shadow: 0px 10px 5px #363636;
    }
    .siteHeaderContents{
        display: flex;
        flex-direction: row;
        text-decoration: none !important;
    }
    .siteTitle{
        font-family: 'Lucida Grande', monospace;
        font-weight: 600;
        font-size: 1.6rem;
        color: #2e475d;
        padding-top:1.5%
    }
</style>