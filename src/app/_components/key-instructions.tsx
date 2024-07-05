export default function KeyInstructions(){
    return (
        <div className="p-4 lg:p-10 w-full flex justify-center">
            <div className="bg-background-dark rounded-lg px-20 py-16 w-full max-w-[833px]">
                <h2 className="text-center text-lg text-gray font-semibold">
                    Guia inicial para obter uma chave da OpenAi
                </h2>

                <ol className="text-white list-decimal space-y-3 mt-10">
                    <li>Realize um cadastro: Acesse o site da <a href="https//:openai.com">OpenAi</a>;</li>
                    <li>Acesse o Painel de API: Dentro do paineil vá até o seu avatar e clique em <b>view API keys</b>;</li>
                    <li>Crie uma nova chave: Ao cliecar no botão de{" "}<b>+ Create new secret key</b> adicione um apleido para a chave e um novo código será gerado;</li>
                    <li>Copei o código gerado e cole abaixo; 👇</li>
                </ol>
            </div>
        </div>
    )
}