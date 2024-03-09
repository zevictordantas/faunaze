import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function LandingPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Image
            alt="Faunaze logo"
            src={"/faunaze-logo.png"}
            height={32}
            width={64}
            className="py-1"
          />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Pricing
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
          <div className="container space-y-10 px-4 sm:px-6 md:space-y-16">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Produtos & Serviços
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Tecnologia de conservação
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                  Com o expertize da equipe do IFSP Acme Technology, criamos um
                  super app para proteger nossa fauna nativa dos perigos da
                  cidade
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-4xl items-start gap-6 sm:max-w-2xl md:gap-12">
              <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                <img
                  alt="Image"
                  className="aspect-[2/1] overflow-hidden rounded-xl object-cover object-center"
                  height="310"
                  src="/jaguatirica.jpg"
                  width="550"
                />
              </div>
              <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                <img
                  alt="Image"
                  className="aspect-[2/1] overflow-hidden rounded-xl object-cover object-center"
                  height="310"
                  src="/guara.jpg"
                  width="550"
                />
              </div>
              <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                <img
                  alt="Image"
                  className="aspect-[2/1] overflow-hidden rounded-xl object-cover object-center"
                  height="310"
                  src="/prego.jpg"
                  width="550"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Colaboração
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Comunidade unida com a inovação.
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  A plataforma que une todos que buscam ajudar a preservar o
                  cerrado da Universidade Federal de São Carlos.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">
                  Use seu próprio smartphone
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Aplicativo móvel que monitora mais de 50 espécies que trafegam
                  pelas rodovias próximas do cerrado.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Painel de controle</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Temos um observatório online onde você pode olhar a
                  contribuição dos demais usuários da comunidade.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Conexão com camêras</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Nós temos postes sinalizadores e câmeras que monitoram e
                  alertam com base nos dados que coletamos
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Mapeamento inteligente</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Fazemos um mapeamento inteligente e colaborativo marcando a
                  frequência dos avistamentos e acidentes.
                </p>
              </div>
            </div>
            <div className="flex justify-center flex-col sm:flex-row items-start gap-4">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events_none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Fale conosco
              </Link>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events_none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-gray-800"
                href="#"
              >
                Faça um tour no sistema
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container grid items-center justify-center gap-4 px-4 md:px-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Faça parte da chamada dos protetores do cerrado.
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Deixe seu contato para que você possa fazer parte da nossa
                comunidade de heróis locais.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input
                  className="max-w-lg flex-1"
                  placeholder="Coloque seu email"
                  type="email"
                />
                <Button type="submit">Cadastre-se</Button>
              </form>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Você será notificado no lançamento do app.
                <Link className="underline underline-offset-2" href="#">
                  Terms & Conditions
                </Link>
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="flex max-w-xl justify-center items-center gap-6 px-4 mx-auto md:px-6">
            <img
              alt="Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              height="310"
              src="/tatu.jpg"
              width="550"
            />
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Acme Inc. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
