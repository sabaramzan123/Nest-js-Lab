import {BadRequestException, Injectable, PipeTransform } from "@nestjs/common";

@Injectable()
export class ParseIntPipe implements PipeTransform{
    transform(value: string): number {
        const parsedValue = parseInt(value, 10);
        if(isNaN(parsedValue)){
            throw new BadRequestException('Validation failed');

        }
        return parsedValue;
        
    }
}