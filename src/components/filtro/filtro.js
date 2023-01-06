export const Filtro =({filtro, hot,ice})=>{
    return(
        <div>
       <select class="select" multiple>
  <option value="1">{hot}</option>
  <option value="2">{ice}</option>
 
</select>
<div class="select-custom-content">
  <button class="btn-save btn btn-primary btn-sm">Save</button>
</div>
        </div>
    )
}