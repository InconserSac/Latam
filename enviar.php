<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $field1 = $_POST['empresa'];
  $field2 = $_POST['nombre'];
  $field3 = $_POST['email'];
  $field4 = $_POST['celular'];

  // Prepare data for CSV
  $data = [$field1, $field2, $field3, $field4];

  // Open or create the CSV file
  $file = fopen('data.csv', 'a');

  // Write data to the CSV file
  fputcsv($file, $data);

  // Close the CSV file
  fclose($file);

  // Redirect to roul.html
  //header('Location: roul.html');
  exit;
}
?>
