export class ValidatorOptions {
    constructor(
        public whitelist: boolean = false,
        public forbidNonWhitelisted: boolean = false,
    ) { }
}
