import Link from "next/link";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import Image from "next/image";

export function DashboardPage() {
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
                  Últimas atividades da comunidade
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Veja os últimos uploads
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                  Aqui estão as últimas ocorrências da região
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-4xl items-start gap-6 sm:max-w-2xl md:gap-12">
              <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                <Card>
                  <CardHeader>
                    <Avatar>
                      <AvatarImage alt="Photo" src="/placeholder-image.jpg" />
                      <AvatarFallback>P</AvatarFallback>
                    </Avatar>
                    <CardTitle>Photo Title</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img
                      alt="Photo"
                      className="object-cover rounded-lg"
                      height={300}
                      src="/tatu.jpg"
                      style={{
                        aspectRatio: "400/300",
                        objectFit: "cover",
                      }}
                      width={400}
                    />
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Brief description of the photo.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                <Card>
                  <CardHeader>
                    <Avatar>
                      <AvatarImage alt="Photo" src="/placeholder-image.jpg" />
                      <AvatarFallback>P</AvatarFallback>
                    </Avatar>
                    <CardTitle>Photo Title</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img
                      alt="Photo"
                      className="object-cover rounded-lg"
                      height={300}
                      src="/tatu.jpg"
                      style={{
                        aspectRatio: "400/300",
                        objectFit: "cover",
                      }}
                      width={400}
                    />
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Brief description of the photo.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                <Card>
                  <CardHeader>
                    <Avatar>
                      <AvatarImage alt="Photo" src="/placeholder-image.jpg" />
                      <AvatarFallback>P</AvatarFallback>
                    </Avatar>
                    <CardTitle>Photo Title</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img
                      alt="Photo"
                      className="object-cover rounded-lg"
                      height={300}
                      src="/tatu.jpg"
                      style={{
                        aspectRatio: "400/300",
                        objectFit: "cover",
                      }}
                      width={400}
                    />
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Brief description of the photo.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
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
