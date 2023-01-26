import React from 'react'
import Side from '../../Dashboard/Side'
import '../User/user.css'

function Create() {
  return (
    <>

<div className='split'>
        <Side/>

      <div>
        <p style={{color:'black'}}>
        <div class="spinner-border text-primary" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-border text-secondary" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-border text-success" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-border text-danger" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-border text-warning" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-border text-info" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-border text-light" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-border text-dark" role="status">
  <span className="visually-hidden">Loading...</span>
</div>

        </p>
      </div>
      </div>

    </>
  )
}

export default Create