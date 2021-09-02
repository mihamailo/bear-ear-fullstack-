import { AppModule } from './app.module';
import { NestFactory } from "@nestjs/core";


const start = async () => {
    try {
        const PORT = process.env.PORT || 8080
        const app = await NestFactory.create(AppModule)

        app.listen(PORT, () => console.log(`server started on ${PORT}`))
    } catch (e) {
        console.log(e);
    }
}

start()