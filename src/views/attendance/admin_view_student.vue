<template>
<head>

<link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">

</head>


<div class="container">

<div class="row">

  <div class="panel panel-primary">
    <div class="panel-heading">
      <h6 class="panel-title">Students</h6>

    </div>

    <table class="table table-hover table-striped table-bordered" id="dev-table">
      <thead>

        <tr>
          <th>Name</th>
          <th>Class</th>
          <th>Contact</th>
          <th>Fee</th>
          <th>Actions</th>
        </tr>
      </thead>
      {% for s in students %}
      <tr>
        <td> {}</td>
        <td>{}</td>
        <td>{}</td>
        <td>{}</td>
        <td><a class="btn btn-primary btn-xs" href="{% url 'update-student' s.id  %}"><span class="glyphicon glyphicon-edit"></span></a>
       <a class="btn btn-danger btn-xs" href="{% url 'delete-student-from-school' s.id  %}"><span class="glyphicon glyphicon-trash"></span></a></td>

      </tr>

     
    </table>
  </div>
</div>
</div>
  
</template>
<style media="screen">
  a:link {
    text-decoration: none;
  }

  h6 {
    text-align: center;
  }

  .row {
    margin: 100px;
  }
</style>
