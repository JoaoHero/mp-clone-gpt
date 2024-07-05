'use client'

import { ReactElement, useState } from "react";
import KeyInstructions from "./_components/key-instructions";
import ChatInput from "./_components/Chat-input";
import SideBar from "./_components/SideBar";
import ChatMessages, { Message } from "./_components/ChatMessages";

function Home(): ReactElement {
  const [openAiKey, setOpenAiKey] = useState<string>("")

  const placeholder = !!openAiKey ? "😄 Digite um OI" : "🔑 Digite sua chave de API"

  const messages = [
    {role: "user", content: "Olá"},
    {role: "assistant", content: "Olá como posso ajuda-lo?"},
    {role: "user", content: "Com varias coisas"},
    {role: "assistant", content: "Então diga!"},
  ] as Message[];

  return (
    <div className="flex">
      <SideBar isVisible={!!openAiKey} />

      <main className="w-full h-screen flex flex-col justify-between">
        <h1 className="text-3xl pb-5 lg:text-[45px] font-bold text-gray text-center">
          TarsGPT
        </h1>

        {!!openAiKey ? <ChatMessages messages={messages} isLoading={false} /> : <KeyInstructions />}

        <ChatInput onSubmitMessage={setOpenAiKey} placeholder={placeholder} />
      </main>
    </div>

  );
}

export default Home;
