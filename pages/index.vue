<template>
    <div>
        <h1 id="text1" class="text-fuchsia-500 text-3xl text-center pt-4 font-bold">Para os amantes de <mark class="bg-transparent text-red-600">flores</mark></h1>
        <h3 id="text2" class="text-center text-xl font-bold">Surpreenda alguem especial com estes lindos buquês</h3>
        <Menu/>
        <Banner/>
    </div>
</template>
<style scoped>
    @media only screen and (max-width: 700px){
        #text1{
            text-align: center;
            font-size: 1.5rem;
        }
        #text2{
            text-align: center;
            font-size: 1rem;
        }
    }
</style>