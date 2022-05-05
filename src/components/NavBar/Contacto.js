export const Contacto = () => {

    return(
        <div class="contacto">
            <div class="contacto__contform">

            <h1 class="contacto__h2">Contactanos</h1>

                <p class="contacto__emailPrincipal">power_book@gmail.com</p>
                <p class="contacto__wsp">+ 54 1154548987</p>
                <h5 class="contacto__horarios">Horarios</h5>
                <p>Martes a Domingos de 09 a 14 hs - 17 a 20 hs</p>
            </div> 
        
                <div class="form">
                    <form action="#" method="GET">
                        <p class="form__formulario">Dejanos tu comentario o consultanos lo que quieras!</p>
                        <input class="form__control" type="text" name="nombres" id="nombres" placeholder="Ingrese su nombre"/>
                        <input class="form__control" type="text" name="apellidos" id="apellidos" placeholder="Ingrese su apellido"/>
                        <input class="form__control" type="email" name="correo" id="correo" placeholder="Ingrese su correo electrónico"/>
                        <textarea class="form__control" name="comentarios" id="comentarios" cols="53" rows="5" placeholder="Comentarios..."></textarea>
                            <div class="contacto__checkbox">
                                <input name="producto" type="checkbox" id="producto" value="remera"/>
                                <label class="contacto__label" for="producto">Remera</label>
                            </div>
                            <div class="contacto__checkbox">    
                                <input name="producto" type="checkbox" id="producto" value="campera"/>
                                <label class="contacto__label" for="producto">Campera</label>
                            </div> 
                            <div class="contacto__checkbox"> 
                                <input name="producto" type="checkbox" id="producto" value="pantalon"/>
                                <label class="contacto__label" for="producto">Pantalon</label>
                            </div>    
                        <input class="form__boton" type="submit" value="enviar"/>
                    </form>
                </div>   
        </div>
    )
}

