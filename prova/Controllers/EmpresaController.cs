using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using prova.Data;
using prova.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace prova.Controllers
{
    [Route("v1/empresa")]
    public class EmpresaController : ControllerBase
    {
        [HttpGet]
        [Route("")]
        public async Task<ActionResult<List<Empresa>>> Get([FromServices] DataContext context)
        {
            var empresas = await context.Empresas.AsNoTracking().ToListAsync();
            return Ok(empresas);
        }

        [HttpGet]
        [Route("{id:int}")]
        public async Task<ActionResult<Empresa>> Get(int id, [FromServices] DataContext context)
        {
            var empresa = await context.Empresas.AsNoTracking().FirstOrDefaultAsync(x => x.Id == id);
            if(empresa == null)
                return NotFound(new { message ="Empresa não encontrada"});
            else
                return Ok(empresa);
        }

        [HttpPost]
        [Route("")]
        public async Task<ActionResult<List<Empresa>>> Post([FromBody] Empresa model, [FromServices]DataContext context)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            try 
            { 
                context.Empresas.Add(model);
                await context.SaveChangesAsync();

            }catch(Exception E)
            {
                return BadRequest( new { message = E.Message });
            }

            return Ok(model);
        }

        [HttpPut]
        [Route("{id:int}")]
        public async Task<ActionResult<List<Empresa>>> Put([FromBody] Empresa model, int id, [FromServices]DataContext context)
        {
            if(model.Id != id)
                return BadRequest(new { message="Empresa não encontrada!"});
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            else
            {
                try
                {
                    context.Entry<Empresa>(model).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
                    await context.SaveChangesAsync();
                }
                catch(DbUpdateConcurrencyException E)
                {
                    return BadRequest(new { message =E.Message});
                }
                catch(Exception E)
                {
                    return BadRequest(new { message = E.Message});
                }

                return Ok(model);
            }
        }

        [HttpDelete]
        [Route("{id:int}")]
        public async Task<ActionResult<Empresa>> Delete(int id, [FromServices] DataContext context)
        {
            var empresa = await context.Empresas.FirstOrDefaultAsync(x => x.Id == id);
            if(empresa == null)
                return NotFound(new { message = "Categoria não encontrada"});
            else
            {
                try
                {
                    context.Empresas.Remove(empresa);
                    await context.SaveChangesAsync();
                }
                catch(Exception E)
                {
                    return BadRequest(new { Message=E.Message});
                }
            }
            return Ok(empresa);
        }
    }
}
