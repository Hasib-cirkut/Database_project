<script>
	import {Router,link,Route} from "svelte-routing"
	import login from './components/login.svelte' 
	import register from './components/register.svelte' 
    import homepage from './components/homepage.svelte'
</script>



<Router>
<Route path="/login" exact component={login}></Route>  
<Route path="/register" exact component={register}></Route> 
<Route path="/homepage" exact component={homepage}></Route> 
<!-- exact er kaaj ki?? -->
</Router>