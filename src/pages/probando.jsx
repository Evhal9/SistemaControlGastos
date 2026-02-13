<section className="relative sm:w-1/3
        h-60 absolute top-[-80px] 
              bg-gradient-to-b 
               from-transparent from-0%
               via-[#f7d6e8] via-20%
               to-[#fff4fa] to-60%
               flex-col
               justify-between">
{[
    {content:"→ Registrá tus gastos diarios", css:" delay-1200 "},
    {content: "→ Analizá tus consumos", css:"delay-1400 "},
    {content: "→ Tomá mejores decisiones financieras", css:" delay-1900"},
].map(({content,css}) =>(
    
        <p className={`absolute top-[50px] left-[200px] transition-all ${css}duration-1500 ease-out ${showText? "opacity-100 translate-y-0": "opacity-0 translate-y-6"}`}>
            {content}</p>      
   
))}

 </section>
