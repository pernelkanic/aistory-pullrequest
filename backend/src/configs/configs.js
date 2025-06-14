import dotenv from 'dotenv'
dotenv.config()

const config = {
    GEMINI_API_KEY: process.env.GEMINI_API_KEY,
    FLASH_API_KEY: process.env.FLASH_API_KEY,
}

export default config
