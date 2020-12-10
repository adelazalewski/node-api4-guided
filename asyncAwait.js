function greet() {
    return "hello world"
}

greet() === "hello world"


async function greet() {
    const name = await someOtherPromise()
    return `hello ${name}`
}

greet() === Promise<"hello name"