# Seed Data

# Landlords
landlord1 = Landlord.create!(
  username: 'landlord1',
  email: 'landlord1@example.com',
  password: 'password123',
  bio: 'Experienced landlord with multiple properties.',
  phone_number: '1234567890',
  image: 'url_to_landlord_image1'
)

landlord2 = Landlord.create!(
  username: 'landlord2',
  email: 'landlord2@example.com',
  password: 'password456',
  bio: 'New landlord eager to provide great housing.',
  phone_number: '9876543210',
  image: 'url_to_landlord_image2'
)

# Properties
locations = ['Nairobi', 'Nakuru', 'Mombasa', 'Kiambu', 'Thika']
room_types = ['Single', 'Double', '1 Bedroom', '2 Bedroom', '3 Bedroom']

property_image1 = 'https://images.unsplash.com/photo-1559230928-34c7c281d7c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJ1aWxkaW5nJTIwcmVudGFsc3xlbnwwfHwwfHx8MA%3D%3D'
property_image2 = 'https://plus.unsplash.com/premium_photo-1677620678562-5876edb7c126?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJ1aWxkaW5nfGVufDB8fDB8fHww'
property_image3 = 'https://images.unsplash.com/photo-1590291127093-24b2232c51ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb3BlcnR5JTIwbWFuYWdlbWVudHxlbnwwfHwwfHx8MA%3D%3D'

room_image1 = 'https://images.unsplash.com/photo-1518481852452-9415b262eba4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2luZ2xlJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D'
room_image2 = 'https://propscout.co.ke/storage/properties/files/double-room-with-a-toilet-1efuk.png'
room_image3 = 'https://pictures-kenya.jijistatic.com/56409058_MzAwLTIyNS01Mjg3MjIyM2Ey.webp'
room_image4 = 'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVkcm9vbXxlbnwwfHwwfHx8MA%3D%3D'
room_image5 = 'https://pictures-kenya.jijistatic.com/58073752_MzAwLTIyNS1iYTE3ZjA1NTM1.webp'

15.times do |i|
  landlord = i.even? ? landlord1 : landlord2
  location = locations[i % 5]
  property = landlord.properties.create!(
    name: "Property #{i + 1}",
    images: [property_image1, property_image2, property_image3].sample, # Sample 1 image
    location: location,
    environment: 'Urban',
    security: 'High'
  )

  room_type = room_types[i % 5]
  price = case room_type
          when 'Single' then 800
          when 'Double' then 1000
          when '1 Bedroom' then 1200
          when '2 Bedroom' then 1500
          when '3 Bedroom' then 1800
          end

  (10..20).to_a.sample.times do |j|
    property.rooms.create!(
      room_type: room_type,
      price: price,
      tenant_name: "Tenant #{j + 1}",
      occupied: j.even?,
      image: [room_image1, room_image2, room_image3, room_image4, room_image5].sample(1).first # Sample 1 image
    )
  end
end

# Users
user1 = User.create!(
  username: 'user1',
  email: 'user1@example.com',
  password: 'password789'
)

user2 = User.create!(
  username: 'user2',
  email: 'user2@example.com',
  password: 'passwordabc'
)

# Messages (associated with landlords and properties)
message1 = Message.create!(
  user: user1,
  landlord: landlord1,
  property: Property.first,
  content: 'Interested in renting a room.'
)

message2 = Message.create!(
  user: user2,
  landlord: landlord2,
  property: Property.last,
  content: 'Can I schedule a property visit?'
)

# Additional Seed Data as needed...

puts 'Seed data has been created successfully!'
