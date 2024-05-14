<template>
    <div>
        <main class="grid grid-cols-1 md:grid-cols-2  gap-7 mx-auto max-w-3xl px-2 mb-16 mt-10">
            
            <div class="flex gap-2" v-for="produto in produtos" :key="produto.id">
                <img 
                    :src="produto.url"
                    alt="produto.name"
                    class="w-28 h-28 rounded-md hover:scale-110 hover:-rotate-2 duration-200"
                >

                <div>
                    <p class="font-bold">{{ produto.name }}</p>
                    <p class="text-sm">{{ produto.decricao }}</p>

                    <div class="flex items-center gap-2 justify-between mt-3">
                        <p class="font-bold text-lg">R${{ produto.preco }}</p>
                        <UButton 
                            class="bg-black px-3 rounded"
                            @click="add(produto)"
                        >
                            <UIcon class="text-white text-lg" name="i-heroicons-shopping-cart"/>
                        </UButton>
                    </div>
                </div>
            </div>
        </main>
        <!--btn footer-->
        <div>
            <UButton @click="isOpen = true" block class="rounded-none py-3 fixed bottom-0 z-40 font-bold"  color="red">
                <span>({{ quantidade }})</span>
                Veja meu carrinho <UIcon class="text-white text-lg" name="i-heroicons-shopping-cart"/>
            </UButton>

            <UModal v-model="isOpen" :transition="false">
                <div class="p-4">
                    <h3 class="font-bold text-center text-xl mb-2">Meu carrinho</h3>
                    <div class="flex justify-between mb-2 flex-col" v-for="produto in valores" :key="produto.id">
                        <div class="flex justify-between">
                            <div>
                                <p class="font-medium">{{ produto.name }}</p>
                                <p class="font-midium mt-2">R${{ produto.preco }}</p>
                            </div>

                            <div>
                                <UButton color="red" @click="remove(produto.id)">
                                    <UIcon color="white" class="text-lg" name="i-heroicons-trash"/>
                                </UButton>
                            </div>
                        </div>
                    </div>
                    <p class="font-bold">Total: <span>{{ total }}</span></p>
                    <p class="font-bold mt-4">Endereço de entrega</p>
                    
                  <input
                        v-model="endereco"
                        id="enderecoInput"
                        type="text"
                        placeholder="Digite seu endereço completo..."
                        class="w-full border-2 p-1 rounded my-1"
                    />
                 
                    <p id="error_men" class="text-red-500 hidden">Digite seu endereço completo</p>

                    <div class="mt-5 w-full">
                        <UButton @click="finalizar" class="bg-green-500 text-white px-4 py-1">Finalizar pedido</UButton>
                    </div>
                </div>
            </UModal>
        </div>
    </div>
</template>
<script setup>
const isOpen = ref(false)
import { cart } from '~/store/cart';
const {produtos, add, valores, remove, quantidade, total} = cart()

const endereco = ref("")
const finalizar = (()=>{
    const error = document.getElementById("error_men")
    const input = document.getElementById("enderecoInput")

    if(endereco.lenght === 0){
       return
    }else if(endereco.value === ""){
        error.classList.remove("hidden")
        input.classList.add("border-red-500")
    }else{
        input.classList.remove("border-red-500")
        error.classList.add("hidden")
        setTimeout(()=>{
            alert('Pedido finalizado com secesso!')
        },600)
    }

})
</script>