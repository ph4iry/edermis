'use client';
import { Button, Dialog, DialogPanel, DialogTitle, Transition, TransitionChild,
  Field, Fieldset, Input, Label, Legend, Select, Textarea, 
  Description} from '@headlessui/react';
import { useState } from "react";
export default function LoginPage() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <LogIn />
        <Register />

        <div className="text-center">
          <span>Interested in a trial run?</span>
          <a href="/home" className="block text-sky-400 underline">Continue as guest</a>
        </div>
      </div>
    </>
  )
}


function LogIn() {
  let [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }

  return (
    <>
      <Button
        onClick={open}
        className="font-bold text-2xl w-[80vw] px-8 py-2 rounded-full bg-sky-400/30 text-sky-500"
      >
        Log In
      </Button>

      <Transition appear show={isOpen}
        enter="transition delay-1000"
        enterFrom="opacity-0"
        enterTo="opacity-100"
      >
        <Dialog as="div" className="relative z-10 focus:outline-none" onClose={close}>
          <div className="fixed backdrop-blur-2xl bg-black/25 inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 transform-[scale(95%)]"
                enterTo="opacity-100 transform-[scale(100%)]"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 transform-[scale(100%)]"
                leaveTo="opacity-0 transform-[scale(95%)]"
              >
                <DialogPanel className="w-full max-w-md h-[60vh] rounded-xl bg-white p-6 flex flex-col justify-between">
                  <div>
                    <DialogTitle as="h1" className="text-5xl font-bold text-black text-center">
                      Log In
                    </DialogTitle>
                    <div className="space-y-8 my-12">
                      <Field>
                        <Label className="text-lg font-medium text-black">Email address</Label>
                        <Input
                          className="mt-1 block w-full rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm/6 text-black focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-black/25"
                        />
                      </Field>
                      <Field>
                        <Label className="text-lg font-medium text-black">Password</Label>
                        <Description className="text-sm/6 text-black/50">Forgot password? <a href="/" className="text-sky-400 underline">Recover password</a></Description>
                        <Input
                          type='password'
                          className="mt-1 block w-full rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm/6 text-black focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-black/25"
                        />
                      </Field>
                    </div>
                  </div>
                  <div className="">
                    <Button
                      className="w-full py-2 px-4 rounded-full bg-sky-400/30 text-sky-500"
                      onClick={close}
                    >
                      Log In
                    </Button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

function Register() {
  let [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }

  return (
    <>
      <Button
        onClick={open}
        className="font-bold text-2xl w-[80vw] px-8 py-2 rounded-full bg-sky-400/30 text-sky-500"
      >
        Register
      </Button>

      <Transition appear show={isOpen}>
        <Dialog as="div" className="relative z-10 focus:outline-none" onClose={close}>
          <div className="fixed bg-black/25 backdrop-blur-2xl inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 transform-[scale(95%)]"
                enterTo="opacity-100 transform-[scale(100%)]"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 transform-[scale(100%)]"
                leaveTo="opacity-0 transform-[scale(95%)]"
              >
                <DialogPanel className="w-full max-w-md h-[60vh] rounded-xl bg-white p-6  flex flex-col justify-between">
                  <div>
                    <DialogTitle as="h1" className="text-5xl font-bold text-black text-center">
                      Sign Up
                    </DialogTitle>
                    <div className="space-y-8 my-12">
                      <Field>
                        <Label className="text-lg font-medium text-black">Email address</Label>
                        <Input
                          className="mt-1 block w-full rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm/6 text-black focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-black/25"
                        />
                      </Field>
                      <Field>
                        <Label className="text-lg font-medium text-black">Password</Label>
                        <Input
                          type='password'
                          className="mt-1 block w-full rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm/6 text-black focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-black/25"
                        />
                      </Field>
                      <Field>
                        <Label className="text-lg font-medium text-black">Confirm Password</Label>
                        <Input
                          type='password'
                          className="mt-1 block w-full rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm/6 text-black focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-black/25"
                        />
                      </Field>
                    </div>
                  </div>
                  <div className="">
                    <Button
                      className="w-full py-2 px-4 rounded-full bg-sky-400/30 text-sky-500"
                      onClick={close}
                    >
                      Continue
                    </Button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}