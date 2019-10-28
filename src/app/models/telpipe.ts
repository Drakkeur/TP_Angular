import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'tel'
})


export class TelPipe implements PipeTransform
{
    transform(tel, args)
    {
        var value = tel.toString().trim().replace(/^\+/, '');

        return ("(+33)" + " " +  value.slice(1,10));
    }
}
